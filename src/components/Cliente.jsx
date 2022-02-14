import {useNavigate} from "react-router-dom"

const Cliente = ({cliente,handleEliminar}) => {
    const navigate = useNavigate();


    const {nombre,empresa,email,telefono,notas,id} = cliente
  return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>
            <p><span className='text-gray-800 uppercase font-bold'>{email}</span></p>
            <p><span className='text-gray-800 uppercase font-bold'>{telefono}</span></p>
         </td>
        <td className='p-3'>{empresa}</td>
        <td className='p-3'>
            
            <button 
            type='button'
            className='bg-yellow-600 hover:bg-yellow-700 w-full text-white p-2 uppercase font-bold
            text-xs mt-2'
            onClick={()=>navigate(`/clientes/${id}`)}
            >ver</button>
            <button 
            type='button'
            className='bg-blue-600 hover:bg-blue-700 w-full text-white p-2 uppercase font-bold
            text-xs mt-2'
            onClick={()=> navigate (`/clientes/editar/${id}`)}
            >EDITAR</button>
            
            <button 
            type='button'
            className='bg-red-600 hover:bg-red-700 w-full text-white p-2 uppercase font-bold
            text-xs mt-2'
            onClick={()=> handleEliminar(id)}
            >ELIMINAR</button>
        </td>

    </tr>
  )
}

export default Cliente
