import { useFormPutUserRole } from "../hooks/index";
import {
  ResultConfirmationDialog,
  Spinner,
} from "../components/index";
import "../styles/CreateInstrument.css";

export const PutUserRole = (presentUser) => {
  const {
    userRole,
    setUserRole,
    handlerSubmit,
    roles,
    showResult,
    success,
    resultContent,
    isFetching
    } = useFormPutUserRole(presentUser);

  return (
    <div className="createInstrumentPage">
      <section className="createInstrumentSection">
        <div className="createInstrument-title">
          <p>Editar Rol de usuario</p>
        </div>
        <form onSubmit={handlerSubmit}>
          
          <label htmlFor="category">Rol</label>
          <select
            id="role"
            name="role"
            value={userRole}
            onChange={(e) => {
              setUserRole(e.target.value);
            }}
          >
            <option value="">
              {presentUser.presentUser.userRole}. Seleccione
              para cambiar:
            </option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>

        <input id="agregar" type="submit" value="Editar" />
        </form>

        {isFetching && <Spinner />}
        {showResult && (
          <ResultConfirmationDialog
            success={success}
            resultContent={resultContent}
            actionDetail={"Volver al listado"}
            presentRoute={"/admin/user/list"}
          />
        )}
      </section>
    </div>
  );
};
