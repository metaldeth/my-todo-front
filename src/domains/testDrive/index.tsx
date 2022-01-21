import { FC } from "react"
import { AppBar } from "../../components/appBar"
import { TestDriveCounter } from "./counter"
import { TestDriveTextField } from "./textField"
import { AppBarButton } from "../../components/appBar/button"
import { ContentContainer } from "../../components/contentContainer"
import { Route } from "react-router"

export const TestDrive: FC<{}> = () => {
  return(
    <Route path='/test'>
      <AppBar>
        <AppBarButton
          link='/test'
        >
          test1
        </AppBarButton>
        <AppBarButton
          link='/'
        >
          test2
        </AppBarButton>
        <AppBarButton
          link='/'
        >
          test3
        </AppBarButton>
        <AppBarButton
          link='/'
        >
          test4
        </AppBarButton>
      </AppBar>
      <ContentContainer>
        <TestDriveTextField/>
        <TestDriveCounter/>
      </ContentContainer>
    </Route>
  )
}