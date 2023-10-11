
export const Section = ({children,id, bgColor}) => {

  return (
    <section style={{backgroundColor: bgColor}} id={id}>
      {children}
    </section>
  )
}