import { File, Flag, Link, MessageCircle, MoreHorizontal } from "lucide-react";
import type { ElementType } from "react";

function KanbanCard() {
    return (
        <div className="mt-5">
            <div className="h-50 bg-white p-2 flex flex-col gap-2 rounded-lg ">
                {/* Card Header */}
                <div className="flex justify-between items-center">
                    <p className="bg-blue-200 py-1 px-2 text-blue-500 font-medium rounded-sm">
                        • Not Started
                    </p>
                    <MoreHorizontal size={18} />
                </div>

                {/* Card title */}
                <div className="flex-1">
                    <h1 className="font-semibold text-[20px]">
                        Make new website1
                    </h1>
                    <p className="truncate text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis minus saepe nam dolores laborum nisi quas
                        possimus deleniti obcaecati excepturi, accusantium
                        asperiores quibusdam ex odit neque vitae quis laboriosam
                        cumque!
                    </p>
                </div>

                {/* Card Detail */}
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <Flag size={14} />
                        <p className="font-light">30 Aug 2025</p>
                    </div>
                    <p className="py-1 px-2 rounded-sm bg-red-300 text-red-800">
                        High
                    </p>
                </div>

                <hr />

                {/* Content Detail */}
                <div className="flex justify-evenly">
                    <CardBottom
                        icon={MessageCircle}
                        amount={4}
                        description="Comment"
                    />
                    <CardBottom icon={Link} amount={5} description="Links" />
                    <CardBottom icon={File} amount={14} description="File" />
                </div>
            </div>
        </div>
    );
}

export default KanbanCard;

interface cardBottomType {
    icon: ElementType;
    amount: number;
    description: string;
}

function CardBottom({ icon: Icon, amount, description }: cardBottomType) {
    return (
        <div className="flex items-center gap-2">
            <Icon size={14} />
            <p className="text-[14px]">{`${amount} ${description}`}</p>
        </div>
    );
}
