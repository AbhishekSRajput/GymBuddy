import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={style.container}>
			<div className={style.loading}>
				<div className={style.loading__letter}>P</div>
				<div className={style.loading__letter}>R</div>
				<div className={style.loading__letter}>E</div>
				<div className={style.loading__letter}>P</div>
				<div className={style.loading__letter}>A</div>
				<div className={style.loading__letter}>I</div>
				<div className={style.loading__letter}>R</div>
				<div className={style.loading__letter}>I</div>
				<div className={style.loading__letter}>N</div>
				<div className={style.loading__letter}>G</div>
				<div className={style.loading__letter}>.</div>
				<div className={style.loading__letter}>.</div>
				<div className={style.loading__letter}>.</div>
			</div>
		</div>
	);
};

export default Loader;
