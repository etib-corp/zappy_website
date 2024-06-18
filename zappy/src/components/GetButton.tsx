import { Dropdown, DropdownDivider } from "flowbite-react";

import { HiDownload, HiCode } from "react-icons/hi";


export default function GetButton() {
    return (
        <div className="flex justify-center py-5">
            <Dropdown label="Get the project !">
                <Dropdown.Item icon={HiDownload}>
                    Download
                </Dropdown.Item>
                <DropdownDivider />
                <Dropdown.Item icon={HiCode}>
                    Clone
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}