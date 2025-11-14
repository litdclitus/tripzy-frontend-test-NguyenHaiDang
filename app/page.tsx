import SearchForm from "./components/SearchForm";
import Background from "./components/Background";

export default function Home() {
  return (
    <Background showTitle={true}>
      <div className="relative z-20" style={{ marginTop: "-160px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-[1170px]">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
