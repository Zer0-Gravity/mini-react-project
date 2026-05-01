import { File, Flag, Link, MessageCircle, MoreHorizontal } from "lucide-react";
import type { ElementType } from "react";
import ButtonPopOver from "../../utils/ButtonPopOver";
import { useModal, useProjectData } from "../../utils/store";

interface KanbanCardProp {
    id: string;
}

function KanbanCard({ id }: KanbanCardProp) {
    const { boards, cards } = useProjectData();
    const { openModal } = useModal();
    const boardView = boards[id];

    return (
        <div className="mt-5 space-y-3">
            {boardView.card.map((id) => {
                const card = cards[id];

                return (
                    <div
                        key={card.cardId}
                        className="h-50 bg-white p-2 flex flex-col gap-2 rounded-lg "
                    >
                        {/* Card Header */}
                        <div className="flex justify-between items-center">
                            <p className="bg-blue-200 py-1 px-2 text-blue-500 font-medium rounded-sm">
                                • {card.status}
                            </p>
                            <ButtonPopOver
                                item={card.cardId}
                                icon={MoreHorizontal}
                                size={18}
                                onRename={() =>
                                    openModal("rename", card.cardId, "card")
                                }
                                onDelete={() => openModal("delete", card.cardId, 'card')}
                            />
                        </div>

                        {/* Card title */}
                        <div className="flex-1">
                            <h1 className="font-semibold text-[20px]">
                                {card.title}
                            </h1>
                            <p className="truncate text-[14px]">
                                {card.description}
                            </p>
                        </div>

                        {/* Card Detail */}
                        <div className="flex justify-between">
                            <div className="flex gap-1 items-center">
                                <Flag size={14} />
                                <p className="font-light">{card.dateEnd}</p>
                            </div>
                            <p className="py-1 px-2 rounded-sm bg-red-300 text-red-800">
                                {card.priority}
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
                            <CardBottom
                                icon={Link}
                                amount={5}
                                description="Links"
                            />
                            <CardBottom
                                icon={File}
                                amount={14}
                                description="File"
                            />
                        </div>
                    </div>
                );
            })}
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
        <div className="flex items-center gap-2 opacity-60">
            <Icon size={14} />
            <p className="text-[14px]">{`${amount} ${description}`}</p>
        </div>
    );
}
