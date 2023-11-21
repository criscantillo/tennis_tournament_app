import Image from 'next/image'
import Link from "next/link";

const HomeUser = () =>{
  const tournamets = [
    {
      'id':1,
      'name':'Torneo de prueba 1',
      'description': 'esto es una prueba de torneos'
    },
    {
      'id':2,
      'name':'Torneo de prueba 2',
      'description': 'esto es una prueba de torneos dos con más texto que los otros'
    },
    {
      'id':3,
      'name':'Torneo de prueba 3',
      'description': 'esto es una prueba de torneos tres'
    }
  ]

  return (
    <div>
      <h2 className="items-center mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Torneos disponibles
      </h2>
      <main className='flex flex-wrap'>
        { tournamets.map((tournament) =>{
          return(
            <div 
              key={tournament.id}
              className="flex-auto w-200 p-6 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tournament.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tournament.description}</p>
                
                <Link
                  href="/detail"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Detalles
                </Link>
            </div>
          )
        })}
      </main>
    </div>
  )
}

const HomeAdmin = () =>{
  return (
    <div>
      <h2 className="items-center mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Administración
      </h2>

      <main className='flex flex-wrap'>
        <Link
          href="/users"
        >
          <div className="flex-auto max-w-sm p-6 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Administrar Usuarios</h5>
            <Image src="/users.svg" alt="usuarios" width="200" height="200" />
          </div>
        </Link>

        <Link
          href="/tournaments"
        >
          <div className="flex-auto max-w-sm p-6 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Administrar Torneos</h5>
              <Image src="/tournament.svg" alt="torneos" width="200" height="200" />
          </div>
        </Link>
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <HomeAdmin />
    </main>
  )
}
