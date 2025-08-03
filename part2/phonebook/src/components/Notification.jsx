import React from "react";

const Notification = ({ message, error }) => {
	if (message === null && error === null) {
		return null;
	}

	return (
		<div>
			{message ? (
				<div className="popup">{message}</div>
			) : (
				<div className="error">{error}</div>
			)}
		</div>
	);
};

export default Notification;
