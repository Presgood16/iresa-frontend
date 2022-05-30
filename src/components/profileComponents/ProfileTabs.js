import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../LoadingError/Error";
import Toast from "../LoadingError/Toast";
import Loading from "./../LoadingError/Loading";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../Redux/Actions/userActions";

const ProfileTabs = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordType2, setPasswordType2] = useState("password");
  const toastId = React.useRef(null);

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

    const passwordShown = () => {
    if (passwordType==="password"){
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const passwordShownConfirm = () => {
    if (passwordType2==="password"){
      setPasswordType2("text");
      return;
    }
    setPasswordType2("password");
  };
  
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { loading: updateLoading } = userUpdateProfile;

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setTel(user.tel);
    }
  }, [dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Password match
    if (password !== confirmPassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Password does not match", Toastobjects);
      }
    } else {
      dispatch(updateUserProfile({ id: user._id, firstName, lastName, email, tel, password }));
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Profile Updated", Toastobjects);
      }
    }
  };
  return (
    <>
    <Toast/>
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      {updateLoading && <Loading />}
      <form className="row  form-container" onSubmit={submitHandler}>
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">First Name</label>
            <input
              className="form-control"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">Last Name</label>
            <input
              className="form-control"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-email">E-mail Address</label>
            <input
              className="form-control"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-tel">Phone Number</label>
            <input
              className="form-control"
              type="tel"
              value={tel}
              required
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">New Password</label>
            <div className="pass-wrapper2">
            <input
              className="form-control"
              type={passwordType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i class="fas fa-eye" onClick={passwordShown}></i>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirm Password</label>
            <div className="pass-wrapper2">
            <input
              className="form-control"
              type={passwordType2}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i class="fas fa-eye" onClick={passwordShownConfirm}></i>
            </div>
          </div>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </>
  );
};

export default ProfileTabs;
