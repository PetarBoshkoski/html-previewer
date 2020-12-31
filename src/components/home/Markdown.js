import React, { useState } from "react"
import { MarkdownContainer, MarkdownWrapper, MarkdownHeadline, HeadlineTitle, TextareaWrapper, MarkdownTextArea, PageHeader } from "../ui/MarkdownStyled"
import Previewer from "./Previewer"

const Markdown = () => {
    const [areaText, setAreaText] = useState("");

    return (
        <React.Fragment>
            <PageHeader>HTML Markdown previewer website. Just write raw HTML and CSS and see it rendered in the previewer.</PageHeader>
            <MarkdownContainer>
                <MarkdownWrapper>
                    <MarkdownHeadline>
                        <HeadlineTitle>
                            Petar Boshkoski CLI
                        </HeadlineTitle>
                    </MarkdownHeadline>
                    <TextareaWrapper>
                        <MarkdownTextArea onChange={(event) => setAreaText(event.target.value)}>
                        </MarkdownTextArea>
                    </TextareaWrapper>
                </MarkdownWrapper>
            </MarkdownContainer>

            <Previewer areaText={areaText}/>
        </React.Fragment>
    )
}

export default Markdown