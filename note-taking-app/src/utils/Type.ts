export interface CollectionProps {
    collectionId: string;
    collectionName: string;
    document: Doc[];
    date: string;
    description: string;
}

export interface Doc {
    documentId: string;
    title: string;
    body: string;
}
