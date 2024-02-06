import Link from "next/link"

function SmallSingleFormula({ name, createdAt, requiredQuantity, id }) {
    const transformedCreatedAt = new Date(createdAt).toDateString()
    const transformedName = name.length <= 20 ? name: `${name.slice(0, 21)} ...`
  return (
      <Link href={`/main/my-formula/${id}`} className="small-single-formula" >
          <h4> 
              {transformedName}
          </h4>
          <h4> {requiredQuantity}kg </h4>
          <h4> {transformedCreatedAt} </h4>
    </Link>
  )
}

export default SmallSingleFormula