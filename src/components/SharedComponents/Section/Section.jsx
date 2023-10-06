
export const Section = ({children, bgColor}) => {

  return (
    <section style={{backgroundColor: bgColor}}>
      {children}
    </section>
  )
}