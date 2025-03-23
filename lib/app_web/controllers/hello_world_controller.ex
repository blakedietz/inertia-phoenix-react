defmodule AppWeb.HelloWorldController do
  use AppWeb, :controller

  def index(conn, _params) do
    conn
    |> Plug.Conn.assign(:page_title, "Hello world")
    |> render_inertia("hello-world")
  end
end
