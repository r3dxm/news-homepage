import React from "react";
import styles from "./Article.module.scss";

function Article(props) {
	return (
		<div className={styles.container}>
			<img src={props.image} alt="article-image" />
			<h2>{props.rank}</h2>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</div>
	);
}

export default Article;
