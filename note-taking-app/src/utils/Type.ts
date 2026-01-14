export interface CollectionProps {
    collectionId: string;
    collectionName: string;
    note: Note[];
    date: string;
    description: string;
}

export interface Note {
    documentId: string;
    title?: string;
    body: string;
}
