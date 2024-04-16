const people = [
    {
        name: 'Sell',
        role: 'Authorize battery seller',
        imageUrl:
        "https://cdn-icons-png.flaticon.com/512/4072/4072860.png",
    },
    {
        name: 'Service',
        role: 'Servicing And charging',
        imageUrl:
        "https://cdn-icons-png.freepik.com/512/9235/9235271.png",
    },
    {
        name: 'Jump Start',
        role: 'Servicing And charging',
        imageUrl:
        "https://cdn-icons-png.flaticon.com/512/4885/4885997.png",
    },
  
]

export default function Services() {
    return (
        <div className="bg-white py-24 sm:py-32 " >
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    we take pride in providing exceptional battery solutions and services to the residents of Uttamnagar and beyond for the past three years. As the premier destination for all your battery needs, we offer a wide range of services and products tailored to meet your requirements.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li className="text-3xl font-bold" key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
