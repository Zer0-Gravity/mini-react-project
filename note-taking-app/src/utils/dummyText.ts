import type { CollectionProps } from "./Type";

export const dummyNote: CollectionProps[] = [
    {
        collectionId: "3d49a359-4bcd-4258-883f-d2f64f96a1bc",
        collectionName: "School",
        date: "12-01-2026", // Moved to parent
        description: "All academic materials, lecture notes, and lab reports.", // Moved to parent
        document: [
            {
                documentId: "fc8d1597-ab4b-4b8c-bb24-21ea38c8455d",
                title: "Calculus Math",
                body: "Limits represent the value that a function approaches...",
            },
            {
                documentId: "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
                title: "Chemistry Lab",
                body: "The titration process was performed using 0.1M HCl...",
            },
        ],
    },
    {
        collectionId: "7e92b1a4-32ef-4c12-990a-f881b2c93d11",
        collectionName: "Work",
        date: "01-02-2026",
        description:
            "Professional projects, meeting minutes, and marketing assets.",
        document: [
            {
                documentId: "bc112233-4455-6677-8899-aabbccddeeff",
                title: "Marketing Strategy",
                body: "Focus on social media engagement and influencer partnerships...",
            },
        ],
    },
    {
        collectionId: "f209340c-1122-3344-5566-778899aabbcc",
        collectionName: "Personal",
        date: "10-02-2026",
        description: "Personal thoughts, grocery lists, and hobby notes.",
        document: [
            {
                documentId: "ee123456-7890-abcd-efgh-ijklmnopqrst",
                title: "Grocery List",
                body: "Spinach, heavy cream, pasta, parmesan cheese, garlic...",
            },
        ],
    },
];
