import { Alert, Timeline } from "flowbite-react";

export default function Roadmap() {
    return (
        <div className="flex flex-wrap justify-center">
            <Timeline className="text-sm mx-5">
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>April 5 2024</Timeline.Time>
                    <Timeline.Title>Etib's Game Engine implementation</Timeline.Title>
                    <Timeline.Body className="text-sm">
                        Get started with the implementation of the game engine, the core of the Onyx project.
                        <Timeline>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>April 18 2024</Timeline.Time>
                                <Timeline.Title>Game Engine architecture</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    The architecture of the game engine is defined and the testing policy is set.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>May 14 2024</Timeline.Time>
                                <Timeline.Title>Maths Logic</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    The mathematics logic is implemented.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>May 19 2024</Timeline.Time>
                                <Timeline.Title>The graphic part is coming !</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    The camera and the shader are implemented.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>May 28 2024</Timeline.Time>
                                <Timeline.Title>3D Model</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    We have implemented a first version of 3D model.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>May 29 2024</Timeline.Time>
                                <Timeline.Title>Optimisation first</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    We optimized the game engine, particularly the 3D model display.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>May 31 2024</Timeline.Time>
                                <Timeline.Title>And let's change our Reality</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    Here we go, we choose to implement the VR part of the game engine.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>June 1st 2024</Timeline.Time>
                                <Timeline.Title>User Interface architecture</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    The architecture of the user interface is defined and the testing policy is set.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>June 5 2024</Timeline.Time>
                                <Timeline.Title>First VR proofs</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    We have implemented a first version of VR. We see the first results !
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>June 8 2024</Timeline.Time>
                                <Timeline.Title>Audio and Animations</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    We have implemented an ultra compatible audio system. And we made a first version of 3D animations.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>June 12 2024</Timeline.Time>
                                <Timeline.Title>Animations done !</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    We have implemented an animation system very easy to use and very simple.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>June 13 2024</Timeline.Time>
                                <Timeline.Title>The dark side</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    The user interface is now in dark mode, and we won't change it anymore at this point.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                <Timeline.Time>June 14 2024</Timeline.Time>
                                <Timeline.Title>Move on !</Timeline.Title>
                                <Timeline.Body className="text-sm">
                                    Now we can move in game using the Quest's joystick.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                        </Timeline>
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            <div className="flex flex-col">
            <Alert className="my-5 mx-5">
                <span className="font-semibold text-xl">Informations !</span>
                <br />
                <br />
                We have 2 projects in parallel, the Game Engine and Zappy itself.
                <br />
                <br />
                The Game Engine is used in Zappy, but it's a standalone project.
                <br />
                We started the Game Engine a long time ago, and basically it was coded in C.
            </Alert>
            <Timeline className="my-5 mx-5">
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>May 20 2024</Timeline.Time>
                    <Timeline.Title>Let's change the world | <br />Working on the server</Timeline.Title>
                    <Timeline.Body className="text-sm w-96">
                        We have set up the project, by making the CI/CD. We have started to work on the server by adding some utils libs.
                        <Timeline>

                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>May 21 2024</Timeline.Time>
                            <Timeline.Title>Networkout</Timeline.Title>
                            <Timeline.Body className="text-sm w-96">
                                We started to make the base of the communication protocol between the server and the client.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>May 27 2024</Timeline.Time>
                            <Timeline.Title>Logic</Timeline.Title>
                            <Timeline.Body className="text-sm w-96">
                                The logic between the server and the client is now implemented. (There still some bugs)
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>May 30 2024</Timeline.Time>
                            <Timeline.Title>Graphic is coming soon</Timeline.Title>
                            <Timeline.Body className="text-sm w-96">
                                Here we are, we can display the first 3D model from the server !
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>June 3 2024</Timeline.Time>
                            <Timeline.Title>Intelligence</Timeline.Title>
                            <Timeline.Body className="text-sm w-96">
                                Our AI is starting to work ! We can see the first results.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>June 9 2024</Timeline.Time>
                            <Timeline.Title>Checkpoint !</Timeline.Title>
                            <Timeline.Body className="text-sm w-96">
                                Here we update papers and we are ready to move on the next step.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>June 10 2024</Timeline.Time>
                            <Timeline.Title>User friendly now</Timeline.Title>
                            <Timeline.Body className="text-sm w-96">
                                We have implemented a first version of the user interface. It's very simple but it's a start.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>June 13 2024</Timeline.Time>
                            <Timeline.Title>Interface done</Timeline.Title>
                            <Timeline.Body className="text-sm w-96">
                                The user interface is now done, thanks to the change made on the Game Engine.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                            <Timeline.Time>June 14 2024</Timeline.Time>
                            <Timeline.Title>The first merge</Timeline.Title>
                            <Timeline.Body className="text-sm w-96">
                                After 4 weeks of work, we have merged the interface, the server and our AI together. We see some little things to fix.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        </Timeline>
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            </div>
        </div>
    );
}