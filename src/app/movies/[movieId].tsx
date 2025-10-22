import { Suspense } from "react";
import { MovieDetails, Loader } from "@screens/Movies";
export default function MovieDetailsScreen() {
  return (
    <Suspense fallback={<Loader />}>
      <MovieDetails />
    </Suspense>
  );
}
