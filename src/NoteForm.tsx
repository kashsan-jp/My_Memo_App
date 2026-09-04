import { useRef, useState, type SyntheticEvent } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import type { NoteData, Tag } from "./App";
import { v4 as uuid4 } from "uuid";

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>

export function NoteForm({
    onSubmit, 
    onAddTag, 
    availableTags,
    title="",
    markdown="",
    tags=[]
}: NoteFormProps) {

    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
    const navigate = useNavigate();

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedTags
        })
        navigate("..")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col className="">
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                ref={titleRef} 
                                required
                                defaultValue={title}
                                className="fs-6"
                            />
                            </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect
                                onCreateOption = {label => {
                                    const newTag = { id: uuid4(), label}
                                    onAddTag(newTag)
                                    setSelectedTags(prev => [...prev, newTag])
                                }}
                                value={selectedTags.map(tag => {
                                    return { label: tag.label, value: tag.id} 
                                })}
                                options={availableTags.map(tag => {
                                    return { label: tag.label, value: tag.id}
                                })}
                                onChange={tags => {
                                    setSelectedTags(tags.map(tag => {
                                        return { label: tag.label, id: tag.value}
                                    }))
                                }}
                                isMulti
                                className="fs-6"
                                />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="markdown">
                        <Form.Label>Body</Form.Label>
                        <Form.Control 
                            ref={markdownRef} 
                            required 
                            as="textarea" 
                            rows={5}
                            defaultValue={markdown}
                            className="fs-5"
                        />
                </Form.Group>
                <Stack direction="horizontal" gap={2} className="justify-content-end">
                    <Button type="submit" variant="outline-success">Save</Button>
                    <Link to="..">
                        <Button type="button" variant="outline-secondary">Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    )
}