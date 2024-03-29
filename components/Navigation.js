import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const VolumeNavigation = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  padding: 0px 32px;
  position: relative;
  width: 100%;
`;

const Nav = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
`;

const Icon = styled(Image)`
  height: 24px;
  position: relative;
  width: 24px;
`;

const Text = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const TextWrapper4 = styled(Link)`
  color: ${(props) => props.theme.earth};
  font-family: ${(props) => props.theme.captionItalicFontFamily};
  font-size: ${(props) => props.theme.captionItalicFontSize};
  font-style: ${(props) => props.theme.captionItalicFontStyle};
  font-weight: ${(props) => props.theme.captionItalicFontWeight};
  letter-spacing: ${(props) => props.theme.captionItalicLetterSpacing};
  line-height: ${(props) => props.theme.captionItalicLineHeight};
  margin-top: -1px;
  position: relative;
  text-align: right;
  width: fit-content;
`;

const VolumeTitle = styled(Link)`
  color: ${(props) => props.theme.earth};
  font-family: ${(props) => props.theme.captionFontFamily};
  font-size: ${(props) => props.theme.captionFontSize};
  font-style: ${(props) => props.theme.captionFontStyle};
  font-weight: ${(props) => props.theme.captionFontWeight};
  letter-spacing: ${(props) => props.theme.captionLetterSpacing};
  line-height: ${(props) => props.theme.captionLineHeight};
  position: relative;
  text-align: right;
  width: fit-content;
`;

export default function Navigation({ book, previousVolume, nextVolume }) {
  return (
    <>
      <VolumeNavigation>
        {previousVolume ? (
          <Nav>
            <Icon
              src="/images/arrow-left.png"
              alt="icon prev"
              width={24}
              height={24}
            />
            <Text>
              <TextWrapper4 href={`/volumes/${previousVolume.slug}`}>
                Previous Volume
              </TextWrapper4>
              <VolumeTitle href={`/volumes/${previousVolume.slug}`}>
                {previousVolume.title}
              </VolumeTitle>
            </Text>
          </Nav>
        ) : null}

        {nextVolume ? (
          <Nav style={{ justifyContent: "flex-end" }}>
            <Text>
              <TextWrapper4 href={`/volumes/${nextVolume.slug}`}>
                Next Volume
              </TextWrapper4>
              <VolumeTitle href={`/volumes/${nextVolume.slug}`}>
                {nextVolume.title}
              </VolumeTitle>
            </Text>
            <Icon
              src="/images/arrow-right.png"
              alt="icon prev"
              width={24}
              height={24}
            />
          </Nav>
        ) : null}
      </VolumeNavigation>
    </>
  );
}
