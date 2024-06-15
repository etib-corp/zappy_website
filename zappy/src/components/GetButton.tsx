import { Dropdown, DropdownDivider } from "flowbite-react";

import { HiLogout, HiViewGrid, HiDownload, HiCode } from "react-icons/hi";


export default function GetButton() {
    return (
        <div className="flex justify-center">
            <Dropdown label="Get the project !">
                <Dropdown.Item icon={HiDownload}>
                    Download
                </Dropdown.Item>
                <DropdownDivider />
                <Dropdown.Header className="flex items-center justify-center font-semibold">
                    OR
                </Dropdown.Header>
                <Dropdown.Item icon={HiCode}>
                    Clone
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}