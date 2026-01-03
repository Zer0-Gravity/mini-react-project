interface TodoProps {
    title: string;
    context: string;
    tag: string;
    status: Status;
}

type Status = "finish" | "unfinished";

export const dummyTodos: TodoProps[] = [
    {
        title: "Make Bread",
        tag: "Quick",
        context: "Cooking",
        status: "unfinished",
    },
    {
        title: "Finish homework",
        tag: "Urgent",
        context: "School",
        status: "unfinished",
    },
    {
        title: "Buy groceries",
        tag: "Important",
        context: "Home",
        status: "unfinished",
    },
    {
        title: "Clean the kitchen",
        tag: "Personal",
        context: "Home",
        status: "unfinished",
    },
    {
        title: "Read 10 pages",
        tag: "Quick",
        context: "Personal",
        status: "unfinished",
    },
    {
        title: "Submit project report",
        tag: "Urgent",
        context: "Work",
        status: "unfinished",
    },
    {
        title: "Call Mom",
        tag: "Personal",
        context: "Social",
        status: "unfinished",
    },
    {
        title: "Fix broken chair",
        tag: "Important",
        context: "Home",
        status: "unfinished",
    },
    {
        title: "Check emails",
        tag: "Quick",
        context: "Work",
        status: "unfinished",
    },
    {
        title: "Prepare presentation",
        tag: "Important",
        context: "Work",
        status: "unfinished",
    },
];
