import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TableCell, TableRow } from "@mui/material";
import formatCurrency from "../utils/currency";

function FacturasComponent({ facturas, setSelectedFactura, selectedFactura }) {
  const handleChecked = (factura) => {
    if (selectedFactura) {
      return selectedFactura.id === factura.id;
    }
    return false;
  };
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Facturas</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {facturas.map((factura) => (
          <TableRow>
            <TableCell align="right">
              <FormControlLabel
                value={factura.id}
                control={<Radio />}
                label={`${factura.id} (${factura.organization_id})`}
                name="boton"
                onChange={() => setSelectedFactura(factura)}
                checked={handleChecked(factura)}
              />
            </TableCell>
            <TableCell align="right">{formatCurrency(factura.amount, factura.currency)}</TableCell>
          </TableRow>
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default FacturasComponent;
