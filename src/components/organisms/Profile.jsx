import React from 'react';
import { defaultProps, compose } from 'recompose';

const Profile = compose(
    defaultProps({
        height: 100,
        width: 100,
    })
)(
    function ImgBox(props) {
        const {
            width,
            height,
            data,
        } = props;
        const {
            name,
            src,
            age,
            job,
            description
        } = data;
        return (
            <div>
                <div
                    style={{
                        display: "flex",
                        margin: 8
                    }}
                >
                    <div
                        style={{
                            paddingLeft: 4,
                            paddingRight: 4,
                            borderLeft: "solid 2px #ffffff",
                            borderRight: "solid 2px #ffffff",
                        }}
                    >
                        <div
                            style={{
                                height: height,
                                width: width,
                                objectFit: "cover",
                                border: "solid 1px #ffffff",
                            }}
                        >
                            <img
                                src={src}
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    margin: "auto 0"
                                }}
                                alt={"profileImg"}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            marginLeft: 16,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                border: "solid 1px #ffffff",
                                paddingLeft: 8,
                                paddingRight: 8,
                                marginTop: 8,
                                marginLeft: 8,
                                minWidth: 300,
                                height: 40,
                                alignItems: "center"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                {"氏名:"}
                            </div>
                            <div
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    marginRight: 8,
                                    color: "white",
                                }}
                            >
                                {`${name}`}
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "solid 1px #ffffff",
                                paddingLeft: 8,
                                paddingRight: 8,
                                marginTop: 8,
                                marginLeft: 8,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                {"Lv."}
                            </div>
                            <div
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                {`${age}`}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "white",
                            marginLeft: 8,
                        }}
                    >
                        {`職業：`}
                    </div>
                    <div
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "white",
                        }}
                    >
                        {`${job}`}
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "white",
                        marginTop: 8,
                        marginLeft: 8,
                    }}
                >
                    {`${description}`}
                </div>
            </div>
        );
    }
);

export default Profile;

