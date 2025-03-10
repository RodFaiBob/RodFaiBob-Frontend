"use client";
import { useParams } from "next/navigation";
import Visualizepage from "@/modules/visualize/visualizepage";

export default function Home() {
  const params = useParams();
  const slug = params.slug || [];

  const [origin, destination] = slug;

  return (
    <div>
      <Visualizepage origin={origin} destination={destination} />
    </div>
  );
}
