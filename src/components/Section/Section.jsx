export const Section  = ({heading, children, className}) => {
  return (
    <section className={`${className}`} id={`${heading}Section`}>
      <h2 className="SectionHeader">{heading}</h2>
      {children}
    </section>
  );
}