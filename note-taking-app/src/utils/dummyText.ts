interface CollectionProps {
    collectionId: string;
    collectionName: string;
    document: Doc[];
}

interface Doc {
    documentId: string;
    title: string;
    body: string;
}

export const dummyNote: CollectionProps[] = [
    {
        collectionId: "3d49a359-4bcd-4258-883f-d2f64f96a1bc",
        collectionName: "School",
        document: [
            {
                documentId: "fc8d1597-ab4b-4b8c-bb24-21ea38c8455d",
                title: "Calculus Math",
                body: "Example",
            },
        ],
    },
    {
        collectionId: "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
        collectionName: "Work Projects",
        document: [
            {
                documentId: "9f8e7d6c-5b4a-3210-fedc-ba9876543210",
                title: "Q1 Marketing Strategy",
                body: "Outline for the upcoming social media campaign and budget allocation.",
            },
            {
                documentId: "bcde1234-5678-90ab-cdef-1234567890ab",
                title: "Meeting Minutes",
                body: "Discussion on project timelines and resource bottlenecks.",
            },
        ],
    },
    {
        collectionId: "7890abcd-ef12-3456-7890-abcdef123456",
        collectionName: "Personal",
        document: [
            {
                documentId: "12345678-1234-1234-1234-123456789012",
                title: "Grocery List",
                body: "Milk, eggs, bread, and spinach.",
            },
        ],
    },
];
