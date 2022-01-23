import React, { useState } from "react";
import "./UserSettings.css";

const UserSettings = () => {
    const [profileImage, setProfileImage] = useState();
    return (
        <div className="edit__profile">
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle profile___img mt-5"
                                src={
                                    profileImage
                                        ? profileImage
                                        : "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
                                }
                            />
                            <div
                                className="mt-5 text-center"
                                style={{
                                    margin: "10px 0",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    id="profile__pic"
                                    onChange={(e) => {
                                        setProfileImage(URL.createObjectURL(e.target.files[0]));
                                        e.preventDefault();
                                    }}
                                />
                                <label
                                    className="btn btn-primary profile-button"
                                    htmlFor="profile__pic"
                                >
                                    Upload new Photo
                                </label>
                            </div>
                            <span
                                className="font-weight-bold"
                                style={{ fontWeight: "bold", fontSize: "16px" }}
                            >
                                Amelly
                            </span>
                            <br />
                            <span className="text-black-50">amelly12@bbb.com</span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2 className="text-center" style={{ fontWeight: "bold" }}>
                                    Profile Settings
                                </h2>
                            </div>
                            <div className="row mt-2" style={{ marginTop: "20px" }}>
                                <div className="col-md-6">
                                    <label className="edit___profile__labels">First Name</label>
                                    <input
                                        type="text"
                                        className="profile__form form-control"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="edit___profile__labels">Last Name</label>
                                    <input
                                        type="text"
                                        className="profile__form form-control"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12" style={{ marginTop: "20px" }}>
                                    <label className="edit___profile__labels">Phone Number</label>
                                    <input
                                        type="text"
                                        className="profile__form form-control"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                                <div className="col-md-12" style={{ marginTop: "20px" }}>
                                    <label className="edit___profile__labels">Email ID</label>
                                    <input
                                        type="text"
                                        className="profile__form form-control"
                                        placeholder="Enter email id"
                                    />
                                </div>
                            </div>

                            <div className="mt-5 text-center" style={{ marginTop: "30px" }}>
                                <button className="btn btn-primary profile-button" type="button">
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5" style={{ marginTop: "15px" }}>
                            <br />
                            <br />
                            <br />
                            <div className="col-md-12">
                                <label className="edit___profile__labels">Hello</label>
                                <input
                                    type="text"
                                    className="profile__form form-control"
                                    placeholder="Hello"
                                />
                            </div>{" "}
                            <br />
                            <div className="col-md-12" style={{ marginTop: "20px" }}>
                                <label className="edit___profile__labels">Hello</label>
                                <input
                                    type="text"
                                    className="profile__form form-control"
                                    placeholder="Hello"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;
