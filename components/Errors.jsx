import Layouts from './Layouts'
import Loading from './Loading'

export function NoData({ error }) {
  return (
    <Layouts title="Memuat Komik...">
      {!error && <Loading message="Sedang memuat komik..." loading={false} />}
      {error && (
        <>
          <h1 className="text-xl text-red-500 font-bold mb-3">Yaahh :(</h1>
          <p>Gagal memuat komik, pastikan kamu terhubung ke internet.</p>
        </>
      )}
    </Layouts>
  )
}
