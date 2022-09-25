import { createContext, useContext, useState, PropsWithChildren } from "react";

interface UserContext {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const PageContext = createContext({})

export const PageContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [page, setPage] = useState<number>(1)

  return (
    <PageContext.Provider value={{ page, setPage }}>
      { children }
    </PageContext.Provider>
  )
}

export const usePageContext = () => {
  const context = useContext(PageContext)
  return context;
}