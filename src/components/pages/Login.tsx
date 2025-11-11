import { useLoginUserMutation } from "../../services/fakestoreApi"

import { useState } from "react"

export default function Login() {
  const [loginUser,{data, isError,isLoading, isSuccess}] = useLoginUserMutation()
  const [form, setForm] = useState({username: "", password: ""}) 

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    await loginUser(form)
  }
  
  return (
    <div className="max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Войти
        </h2>
      <form onSubmit={submitForm} className="space-y-3">
        <input
          name="username"
          placeholder="Username"
          type="text"
          onChange={(e) => setForm({...form, username: e.target.value})}
          className="w-full border p-2 rounded"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({...form, password: e.target.value})}
          className="w-full border p-2 rounded"
        />
        <button
          className="bg-indigo-600 w-full rounded py-2 text-white hover:bg-indigo-700"
        >
          Войти
        </button>
        {isError && <p>Ошибка</p>}
        {isLoading && <p>Загружается</p>}
      </form>
    </div>
  )
}
