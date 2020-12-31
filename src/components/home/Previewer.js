import React from "react"
import { PreviewerContainer, PreviewerWrapper, PreviewerHeadline, HeadlineTitle, PreviewerTextWrapper, PreviewerText } from "../ui/PreviewerStyled"
const Previewer = ({areaText}) => {
    return (
        <React.Fragment>
            <PreviewerContainer>
                <PreviewerWrapper>
                    <PreviewerHeadline>
                        <HeadlineTitle>
                            Previewer
                        </HeadlineTitle>
                    </PreviewerHeadline>
                <PreviewerTextWrapper>
                    <PreviewerText>
                        <div dangerouslySetInnerHTML={{__html: areaText}} />
                    </PreviewerText>
                </PreviewerTextWrapper>

                </PreviewerWrapper>
            </PreviewerContainer>
        </React.Fragment>
    )
}

export default Previewer