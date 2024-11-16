export const Section  = ({heading, children, className, id}) => {

  return (
    <section className={`${className}`} id={id}>
      <h2 className="SectionHeader">{heading}</h2>
      {children}
    </section>
  );
}