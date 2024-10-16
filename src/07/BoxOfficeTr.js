export default function BoxOfficeTr({handleClick, mv}) {
  return (
    <tr onClick = {handleClick}
        className="bg-white border-b hover:bg-gray-100">
      <td scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
          {mv.rank}
      </td>
      <td className="px-6 py-3">
          {mv.movieNm}
      </td>
      <td className="px-6 py-3">
          {parseInt(mv.salesAmt).toLocaleString()}
      </td>
      <td className="px-6 py-3">
          {parseInt(mv.audiCnt).toLocaleString()}
      </td>
      <td className="px-6 py-3 text-center">
          {mv.rankInten > 0 ? <span className = "text-red-600 pr-2">▲</span> : mv.rankInten < 0 ? <span className = "text-blue-600 pr-2">▼</span> : '-'}
          {mv.rankInten !== 0 && Math.abs(mv.rankInten)}
      </td>
    </tr>
  )
}
