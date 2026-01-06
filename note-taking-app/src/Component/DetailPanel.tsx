import { useState } from "react";
import { LuFile, LuPlus, LuTrash2 } from "react-icons/lu";

function DetailPanel() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div className="w-145 h-full border">
            <section>
                <h1>Collection Name</h1>
                <p>
                    Date modified: <i>12-10-2026</i>
                </p>
            </section>

            <section>
                <h2>Description : </h2>
                <p contentEditable="true" className="p-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Provident, doloremque eveniet qui ab id sunt. Cupiditate
                    voluptas accusamus sed veritatis, eveniet perferendis
                    expedita est. Recusandae deserunt repellat dolore commodi
                    nulla.
                </p>
            </section>
            <section>
                <div className="flex justify-between">
                    <h1>Note</h1>
                    <LuPlus />
                </div>

                <div>
                    <div
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="cursor-pointer"
                    >
                        <LuFile />
                        <h1>Marketing Strategy</h1>
                        <LuTrash2 />
                    </div>
                </div>

                {isModalOpen && <div>This is more detail page</div>}
            </section>
        </div>
    );
}
export default DetailPanel;
