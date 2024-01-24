import Link from "next/link";
import Image from "next/image.js";
import { introduction, volumes } from "../../resources/lib/data.js";
import { useRouter } from "next/router.js";
import styled from "styled-components";

export const StyledAllVolumesPage = styled.div`
  align-items: flex-start;
  background-color: ${(props) => props.theme.clouds};
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 844px;
  padding: 48px 0px;
  position: relative;
  /* max-width: 500px; */
`;

export const AllVolumesIntro = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 18px;
  padding: 0px 32px;
  position: relative;
  width: 100%;
`;
export const BackHomeLink = styled(Link)`
  color: ${(props) => props.theme.earth};
  font-family: ${(props) => props.theme.bodyFontFamily};
  font-size: ${(props) => props.theme.bodyFontSize};
  font-style: ${(props) => props.theme.bodyFontStyle};
  font-weight: ${(props) => props.theme.bodyFontWeight};
  letter-spacing: ${(props) => props.theme.bodyLetterSpacing};
  line-height: ${(props) => props.theme.bodyLineHeight};
`;

export const Title = styled.h1`
  align-self: stretch;
  color: ${(props) => props.theme.earth};
  font-family: ${(props) => props.theme.headline1FontFamily};
  font-size: ${(props) => props.theme.headline1FontSize};
  font-style: ${(props) => props.theme.headline1FontStyle};
  font-weight: ${(props) => props.theme.headline1FontWeight};
  letter-spacing: ${(props) => props.theme.headline1LetterSpacing};
  line-height: ${(props) => props.theme.headline1LineHeight};
  margin-top: 0;
  position: relative;
`;

export const SpanWrapper = styled.p`
  align-self: stretch;
  color: var(--earth);
  font-family: ${(props) => props.theme.bodyFontFamily};
  font-size: ${(props) => props.theme.bodyFontSize};
  font-style: ${(props) => props.theme.bodyFontStyle};
  font-weight: ${(props) => props.theme.bodyFontWeight};
  letter-spacing: ${(props) => props.theme.bodyLetterSpacing};
  line-height: ${(props) => props.theme.bodyLineHeight};
  position: relative;
  max-width: 800px;
`;

export const TextWrapper = styled.span`
  color: #282828;
  font-family: ${(props) => props.theme.bodyFontFamily};
  font-size: ${(props) => props.theme.bodyFontSize};
  font-style: ${(props) => props.theme.bodyFontStyle};
  font-weight: ${(props) => props.theme.bodyFontWeight};
  letter-spacing: ${(props) => props.theme.bodyLetterSpacing};
  line-height: ${(props) => props.theme.bodyLineHeight};
`;

const ALlVolumes = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  padding: 0px 32px;
  position: relative;
`;

const AllVolumesTitle = styled.h2`
  color: var(--earth);
  font-family: ${(props) => props.theme.headline2FontFamily};
  font-size: ${(props) => props.theme.headline2FontSize};
  font-style: ${(props) => props.theme.headline2FontStyle};
  font-weight: ${(props) => props.theme.headline2FontWeight};
  letter-spacing: ${(props) => props.theme.headline2LetterSpacing};
  line-height: ${(props) => props.theme.headline2LineHeight};
  margin-top: -1px;
  position: relative;
  width: fit-content;
`;

const VolumesList = styled.ul`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  padding-left: 0;
  max-width: 400px;
`;

const Volume = styled.li`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const StyledImage = styled(Image)`
  height: 170px;
  /* margin-left: -10px; */
  /* margin-right: -10px; */
  /* margin-top: -8px; */
  object-fit: cover;
  position: relative;
  box-shadow: 0px 22px 12px -12px rgba(0, 0, 0, 0.07),
    0px 16px 8px -8px rgba(0, 0, 0, 0.07), 0px 7px 4px -4px rgba(0, 0, 0, 0.07),
    0px 4px 8px -2px rgba(0, 0, 0, 0.09), 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
`;

const VolumeTitle = styled(Link)`
  align-self: stretch;
  color: var(--earth);
  font-family: ${(props) => props.theme.captionFontFamily};
  font-size: ${(props) => props.theme.captionFontSize};
  font-style: ${(props) => props.theme.captionFontStyle};
  font-weight: ${(props) => props.theme.captionFontWeight};
  letter-spacing: ${(props) => props.theme.captionLetterSpacing};
  line-height: ${(props) => props.theme.captionLineHeight};
  position: relative;
  width: 80px;
`;

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function routeToRandomBook(array) {
    const randomBook = getRandomElement(array);
    router.push(`volumes/${randomBook.slug}`);
  }

  return (
    <>
      <StyledAllVolumesPage>
        <AllVolumesIntro>
          <BackHomeLink href="/">← Back Home</BackHomeLink>
          <Title>Lord of the Rings</Title>
          <SpanWrapper>
            <TextWrapper>{introduction}</TextWrapper>
          </SpanWrapper>
        </AllVolumesIntro>
        <ALlVolumes>
          <AllVolumesTitle>All Volumes</AllVolumesTitle>
          <VolumesList>
            {volumes.map((volume) => {
              return (
                <Volume key={volume.slug}>
                  <Link href={`/volumes/${volume.slug}`}>
                    <StyledImage
                      src={`${volume.cover}`}
                      className="img"
                      alt="Cover the fellowship"
                      width={105}
                      height={170}
                    />
                  </Link>
                  <VolumeTitle href={`/volumes/${volume.slug}`}>
                    {volume.title}
                  </VolumeTitle>
                </Volume>
              );
            })}
          </VolumesList>
          <button type="button" onClick={() => routeToRandomBook(volumes)}>
            Get random book
          </button>
        </ALlVolumes>
      </StyledAllVolumesPage>
    </>
  );
}
