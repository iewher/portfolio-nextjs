import styles from "./index.module.scss";

interface MiniQuoteProps {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}

/**
 * Краткая цитата.
 */
export default function Quote() {
  return (
    <div className={styles.Quote}>
      <p className={styles.Text}>I remember Terry Davis</p>
      <MiniQuote params={{ top: "-15px", left: "20px" }} />
    </div>
  );
}

function MiniQuote({ params }: { params: MiniQuoteProps }) {
  return (
    <div
      className={styles.MiniQuote}
      style={{
        top: params.top ?? 0,
        bottom: params.bottom ?? 0,
        right: params.right ?? 0,
        left: params.left ?? 0,
      }}
    >
      ``
    </div>
  );
}
