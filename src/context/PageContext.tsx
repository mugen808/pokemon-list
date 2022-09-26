import { createContext, useContext, useState, PropsWithChildren } from "react";

interface UserContext {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const PageContext = createContext<any>({})

export const PageContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [page, setPage] = useState<number>(1)
  const [gridView, setGridView] = useState<boolean>(false)
  return (
    <PageContext.Provider value={{ page, setPage, gridView, setGridView }}>
      { children }
    </PageContext.Provider>
  )
}

export const usePageContext = () => {
  const context = useContext(PageContext)
  return context;
}