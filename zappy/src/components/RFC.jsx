import { Table } from "flowbite-react"

export default function RFC() {
    return (
        <div className="flex justify-around my-5 flex-wrap">
            <Table>
                <Table.Head>
                <Table.HeadCell>
                    Symbol
                </Table.HeadCell>
                <Table.HeadCell>
                    Meaning
                </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="x_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        X
                    </Table.Cell>
                    <Table.Cell>
                        width or horizontal position
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="y_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Y
                    </Table.Cell>
                    <Table.Cell>
                        height or vertical position
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="q0_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        q0
                    </Table.Cell>
                    <Table.Cell>
                        resource 0 (food) quantity
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="q1_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        q1
                    </Table.Cell>
                    <Table.Cell>
                        resource 1 (linemate) quantity
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="q2_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        q2
                    </Table.Cell>
                    <Table.Cell>
                        resource 2 (deraumere) quantity
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="q3_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        q3
                    </Table.Cell>
                    <Table.Cell>
                        resource 3 (sibur) quantity
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="q4_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        q4
                    </Table.Cell>
                    <Table.Cell>
                        resource 4 (mendiane) quantity
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="q5_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        q5
                    </Table.Cell>
                    <Table.Cell>
                        resource 5 (phiras) quantity
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="q6_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        q6
                    </Table.Cell>
                    <Table.Cell>
                        resource 6 (thystame) quantity
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="n_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        n
                    </Table.Cell>
                    <Table.Cell>
                        player number
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="O_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        O
                    </Table.Cell>
                    <Table.Cell>
                        orientation: 1(N), 2(E), 3(S), 4(W)
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="L_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        L
                    </Table.Cell>
                    <Table.Cell>
                        player or incantation level
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="e_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        e
                    </Table.Cell>
                    <Table.Cell>
                        egg number
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="T_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        T
                    </Table.Cell>
                    <Table.Cell>
                        time unit
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="N_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        N
                    </Table.Cell>
                    <Table.Cell>
                        name of the team
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="R_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        R
                    </Table.Cell>
                    <Table.Cell>
                        incantation result
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="M_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        M
                    </Table.Cell>
                    <Table.Cell>
                        message
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell id="i_" className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        i
                    </Table.Cell>
                    <Table.Cell>
                        resource number
                    </Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            <div className="flex max-w-96">
                <Table>
                    <Table.Head>
                    <Table.HeadCell>
                        Server Response
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Client Request
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Details
                    </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                msz <a href="#x_">X</a> <a href="#y_">Y</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                msz\n
                            </Table.Cell>
                            <Table.Cell>
                                map size
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                bct <a href="#x_">X</a> <a href="#y_">Y</a>
                                <a href="#q0_"> q0</a> <a href="#q1_">q1</a> <a href="#q1_">q2</a>
                                <a href="#q3_"> q3</a> <a href="#q4_">q4</a> <a href="#q5_">q5</a>
                                <a href="#q6_"> q6</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                bct <a href="#x_">X</a> <a href="#y_">Y</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                content of a tile
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                bct <a href="#x_">X</a> <a href="#y_">Y</a>
                                <a href="#q0_"> q0</a> <a href="#q1_">q1</a> <a href="#q1_">q2</a>
                                <a href="#q3_"> q3</a> <a href="#q4_">q4</a> <a href="#q5_">q5</a>
                                <a href="#q6_"> q6</a>\n * nbr_tiles
                            </Table.Cell>
                            <Table.Cell>
                                mct\n
                            </Table.Cell>
                            <Table.Cell>
                                content of the map (all the tiles)
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                tna <a href="#N_">N</a>\n * nbr_teams
                            </Table.Cell>
                            <Table.Cell>
                                tna\n
                            </Table.Cell>
                            <Table.Cell>
                                name of all the teams
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pnw #<a href="#n_">n</a> <a href="#x_">X</a> <a href="#y_">Y</a> <a href="#O_">O</a> <a href="#L_">L</a> <a href="#N_">N</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                connection of a new player
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                ppo #<a href="#n_">n</a> <a href="#x_">X</a> <a href="#y_">Y</a> <a href="#O_">O</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                ppo #<a href="#n_">n</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                {"player's position"}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                plv #<a href="#n_">n</a> <a href="#L_">L</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                plv #<a href="#n_">n</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                {"player's level"}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pin #<a href="#n_">n</a> <a href="#x_">X</a> <a href="#y_">Y</a>
                                <a href="#q0_"> q0</a> <a href="#q1_">q1</a> <a href="#q1_">q2</a>
                                <a href="#q3_"> q3</a> <a href="#q4_">q4</a> <a href="#q5_">q5</a>
                                <a href="#q6_"> q6</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                pin #<a href="#n_">n</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                {"player's inventory"}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pex #<a href="#n_">n</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                expulsion
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pbc #<a href="#n_">n</a> <a href="#M_">M</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                broadcast
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pic <a href="#x_">X</a> <a href="#y_">Y</a> <a href="#L_">L</a> #<a href="#n_">n</a> #<a href="#n_">n</a>...\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                start of an incantation (by the first player)
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pie <a href="#x_">X</a> <a href="#y_">Y</a> <a href="#R_">R</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                end of an incantation
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pfk #<a href="#n_">n</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                egg laying by the player
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pdr #<a href="#n_">n</a> <a href="#i_">i</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                resource dropping
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pgt #<a href="#n_">n</a> <a href="#i_">i</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                resource collecting
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                pdi #<a href="#n_">n</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                death of a player
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                enw #<a href="#e_">e</a> #<a href="#n_">n</a> <a href="#x_">X</a> <a href="#y_">Y</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                an egg was laid by a player
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                ebo #<a href="#e_">e</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                player connection for an egg
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                edi #<a href="#e_">e</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                death of an egg
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                sgt <a href="#T_">T</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                sgt\n
                            </Table.Cell>
                            <Table.Cell>
                                time unit request
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                sst <a href="#T_">T</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                sst <a href="#T_">T</a>\n
                            </Table.Cell>
                            <Table.Cell>
                                time unit modification
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                seg <a href="#N_">N</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                end of game
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                smg <a href="#M_">M</a>\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                message from the server
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                suc\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                unknown command
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="font-medium text-gray-900 dark:text-white">
                                sbp\n
                            </Table.Cell>
                            <Table.Cell>
                            </Table.Cell>
                            <Table.Cell>
                                command parameter
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}