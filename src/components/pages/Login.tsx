import { useLoginUserMutation } from "../../services/fakestoreApi"
import { useDispatch } from "react-redux"
import { setToken } from "../../store/authSlice"
import { useState } from "react"

export default function Login() {
  const dispatch = useDispatch()
  const [loginUser,{data, error, isError,isLoading, isSuccess}] = useLoginUserMutation()
  const [form, setForm] = useState({username: "", password: ""}) 

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await loginUser(form).unwrap()
      console.log("Login success:", result)
      console.log("Login token:", result.token)
      if (result.token) {
        dispatch(setToken(result.token))
      }
    } catch (err) {
      console.error("Login error:", err)
    }
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
         className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({...form, password: e.target.value})}
         className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        <button
          className="bg-indigo-600 w-full rounded py-2 text-white hover:bg-indigo-700"
          disabled={isLoading}
        >
          {isLoading ? "Загружается..." : "Войти"}
        </button>
        {isError && (
          <p className="text-red-600">
            Ошибка авторизации: {error && 'status' in error ? `${error.status}` : 'Неизвестная ошибка'}
            <br />
            <small>Для теста используйте: username: mor_2314, password: 83r5^_</small>
          </p>
        )}
        {isSuccess && <p className="text-green-600">Успешный вход! Token: {data?.token}</p>}
      </form>
    </div>
  )
}
