import { volumes } from "@/resources/lib/data";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  StyledAllVolumesPage,
  AllVolumesIntro,
  BackHomeLink,
  Title,
  SpanWrapper,
  TextWrapper,
} from "@/pages/volumes/index";

export default function Book() {
  const router = useRouter();
  const { slug } = router.query;

  const book = volumes.find((volume) => volume.slug === slug);

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!book) {
    return null;
  }

  const VolumeDetails = styled.div`
    align-items: center;
    align-self: stretch;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    background-color: ${(props) => props.color || props.theme.towers};
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    padding: 24px 32px;
    position: relative;
    width: 100%;
  `;

  const Books = styled.ul`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
  `;

  const SingleBook = styled.li`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
  `;

  const TextWrapper2 = styled.p`
    color: ${(props) => props.theme.clouds};
    font-family: ${(props) => props.theme.captionItalicFontFamily};
    font-size: ${(props) => props.theme.captionItalicFontSize};
    font-style: ${(props) => props.theme.captionItalicFontStyle};
    font-weight: ${(props) => props.theme.captionItalicFontWeight};
    letter-spacing: ${(props) => props.theme.captionItalicLetterSpacing};
    line-height: ${(props) => props.theme.captionItalicLineHeight};
    margin-top: -1px;
    position: relative;
    width: 147px;
  `;

  const TextWrapper3 = styled.p`
    color: ${(props) => props.theme.clouds};
    font-family: ${(props) => props.theme.titleFontFamily};
    font-size: ${(props) => props.theme.titleFontSize};
    font-style: ${(props) => props.theme.titleFontStyle};
    font-weight: ${(props) => props.theme.titleFontWeight};
    letter-spacing: ${(props) => props.theme.titleLetterSpacing};
    line-height: ${(props) => props.theme.titleLineHeight};
    position: relative;
    width: 147px;
  `;

  const CoverImage = styled(Image)`
    height: 260px;
    object-fit: cover;
    position: relative;
    width: 160px;
    box-shadow: 0px 22px 12px -12px rgba(0, 0, 0, 0.07),
      0px 16px 8px -8px rgba(0, 0, 0, 0.07),
      0px 7px 4px -4px rgba(0, 0, 0, 0.07), 0px 4px 8px -2px rgba(0, 0, 0, 0.09),
      0px 2px 10px 0px rgba(0, 0, 0, 0.06);
  `;

  return (
    <>
      <Head>
        <title>{book.title}</title>
      </Head>
      <StyledAllVolumesPage>
        <AllVolumesIntro>
          <BackHomeLink href="/volumes">← All Volumes</BackHomeLink>
          <Title>{book.title}</Title>
          <SpanWrapper>
            <TextWrapper>{book.description}</TextWrapper>
          </SpanWrapper>
        </AllVolumesIntro>
        <VolumeDetails color={book.color}>
          <Books>
            {book.books.map((book) => {
              return (
                <SingleBook key={book.ordinal}>
                  <TextWrapper2>{book.ordinal}</TextWrapper2>
                  <TextWrapper3>{book.title}</TextWrapper3>
                </SingleBook>
              );
            })}
          </Books>
          <CoverImage
            height={230}
            width={140}
            src={book.cover}
            alt={book.title}
          />
        </VolumeDetails>
        <Navigation
          previousVolume={previousVolume}
          nextVolume={nextVolume}
          book={book}
        />
      </StyledAllVolumesPage>
    </>
  );
}
