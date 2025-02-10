import { useState } from 'react'

interface FormProps {
   render: ({
      data,
      handleChange,
   }: {
      data: Record<string, string>;
      handleChange: (name: string, value: string) => void;
   }) => React.ReactNode
}

export default function Form({ render }: FormProps) {
   const [data, setData] = useState({})

   const handleChange = (name: string, value: any) => {
      setData(prev => ({ ...prev, [name]: value }))
   }

   return render({ data, handleChange })
}