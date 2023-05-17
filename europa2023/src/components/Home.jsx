import { CounterDays } from "./CounterDays"
import { ShortcutAcces } from "./ShortcutAcces"

export const Home = () => {
  return (
    <>
        <section id="home">
            <div className="home-title">
                <h1>ALICANTE</h1>
                <h3>2023</h3>
            </div>
        </section>
        <CounterDays />
        <ShortcutAcces />
    </>
  )
}
