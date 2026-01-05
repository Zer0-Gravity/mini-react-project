interface TodoProps {
    id: string;
    title: string;
    context: string;
    tag: string;
    status: Status;
}

type Status = "finish" | "unfinished";

export const dummyTodos: TodoProps[] = [
    {
        id: "d3b07384-d11d-445a-947b-7b001a919323",
        title: "Make Bread",
        tag: "Quick",
        context: "Cooking",
        status: "unfinished",
    },
    {
        id: "7ac1480d-8533-41c1-9a99-46765276e064",
        title: "Finish homework",
        tag: "Urgent",
        context: "School",
        status: "unfinished",
    },
    {
        id: "b4e82436-09a2-4a0b-9602-555e1494917f",
        title: "Buy groceries",
        tag: "Important",
        context: "Home",
        status: "unfinished",
    },
    {
        id: "f1a23992-6d1a-4d7f-a18d-6c8435d8e235",
        title: "Clean the kitchen",
        tag: "Personal",
        context: "Home",
        status: "unfinished",
    },
    {
        id: "2c92330a-200c-4613-868c-4467554f7626",
        title: "Read 10 pages",
        tag: "Quick",
        context: "Personal",
        status: "unfinished",
    },
    {
        id: "5b53995b-01d0-4828-868f-9a9f939e83d8",
        title: "Submit project report",
        tag: "Urgent",
        context: "Work",
        status: "unfinished",
    },
    {
        id: "9e149591-5f2c-4903-827d-92765276940a",
        title: "Call Mom",
        tag: "Personal",
        context: "Social",
        status: "unfinished",
    },
    {
        id: "4424360b-853d-4c2d-9602-888f1a91917f",
        title: "Fix broken chair",
        tag: "Important",
        context: "Home",
        status: "unfinished",
    },
    {
        id: "a1a89234-7e1a-4d9f-a28d-7c8435d8e244",
        title: "Check emails",
        tag: "Quick",
        context: "Work",
        status: "unfinished",
    },
    {
        id: "e3b9338a-310c-4713-878c-5567554f7637",
        title: "Prepare presentation",
        tag: "Important",
        context: "Work",
        status: "unfinished",
    },
];
