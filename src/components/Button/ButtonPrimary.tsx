

interface ButtonPrimaryProps {
  tittle: String
}


export default function ButtonPrimary(props: ButtonPrimaryProps){

  return (
    <button className="flex bg-background-light dark:bg-background-dark border border-slate-500 px-4 py-2 rounded-xl text-primary-light" >{props.tittle}</button>
  )
}