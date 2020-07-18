import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Posts = () => {
  const { allMediumPost } = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            title
            uniqueSlug
            createdAt(formatString: "DD MMMM YYYY")
            virtuals {
              subtitle
              tags {
                name
              }
              previewImage {
                imageId
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `);

  const sectionTitle = { title: 'Blog', subtitle: 'All my posts' };
  const posts = allMediumPost.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            title,
            createdAt,
            uniqueSlug,
            virtuals: {
              tags,
              subtitle: description,
              previewImage: { imageId }
            }
          } = item.node;

          console.log(`https://miro.medium.com/fit/c/800/400/${imageId}`);
          return (
            <Styled.Post key={id}>
              <a href={`https://medium.com/@umair_farooq/${uniqueSlug}`} target="blank">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                    {imageId && (
                      <Styled.Image>
                        <img src={`https://miro.medium.com/fit/c/800/400/${imageId}`} alt={title} />
                      </Styled.Image>
                    )}
                    <Styled.Content>
                      <Styled.Date>{createdAt}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item.name}>{item.name}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </a>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;
