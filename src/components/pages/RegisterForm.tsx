import { useState } from 'react'
import { useRegisterUserMutation } from '../../services/fakestoreApi'

export default function RegisterForm() {
  const [registerUser, { isLoading, isSuccess, isError }] = useRegisterUserMutation()

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await registerUser({
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      phone: formData.phone,
      address: {
        city: 'Astana',
        street: 'Main Street',
        number: 1,
        zipcode: '00000',
        geolocation: { lat: '0', long: '0' },
      },
    })
  }

  return (
    <div className="max-w-md mx-auto p-6 ">
      <h2 className=" text-2xl font-bold mb-4 text-center ">Регистрация</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="email" type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200" onChange={handleChange} />
        <input name="username" placeholder="Username" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200" onChange={handleChange} />
        <input name="password" type="password" placeholder="Пароль" className="w-full border border-gray-300  p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200" onChange={handleChange} />
        <input name="firstname" placeholder="Имя" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200" onChange={handleChange} />
        <input name="lastname" placeholder="Фамилия" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200" onChange={handleChange} />
        <input name="phone" placeholder="Телефон" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200" onChange={handleChange} />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          {isLoading ? 'Отправка...' : 'Зарегистрироваться'}
        </button>
      </form>

      {isSuccess && <p className="text-green-600 mt-3">Регистрация успешна!</p>}
      {isError && <p className="text-red-600 mt-3">Ошибка при регистрации</p>}
    </div>
  )
}
