import ColumnMetrics from './ColumnMetrics';

function doesRowContainSelectedCell(props) {
  let selected = props.cellMetaData.selected;
  if (selected && selected.rowIdx === props.idx) {
    return true;
  }
  return false;
}

function willRowBeDraggedOver(props) {
  let dragged = props.cellMetaData.dragged;
  return dragged != null && (dragged.rowIdx >= 0 || dragged.complete === true);
}

function hasRowBeenCopied(props) {
  let copied = props.cellMetaData.copied;
  return copied != null && copied.rowIdx === props.idx;
}

const RowComparer = (currentProps, nextProps) => {
  return !(ColumnMetrics.sameColumns(currentProps.columns, nextProps.columns, ColumnMetrics.sameColumn)) ||
    doesRowContainSelectedCell(currentProps) ||
    doesRowContainSelectedCell(nextProps) ||
    willRowBeDraggedOver(nextProps) ||
    nextProps.row !== currentProps.row ||
    currentProps.colDisplayStart !== nextProps.colDisplayStart ||
    currentProps.colDisplayEnd !== nextProps.colDisplayEnd ||
    hasRowBeenCopied(currentProps) ||
    currentProps.isSelected !== nextProps.isSelected ||
    nextProps.height !== currentProps.height ||
    currentProps.forceUpdate === true;
};

export default RowComparer;
